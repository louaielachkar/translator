from django.shortcuts import render
from azure.storage.blob import ContainerClient
import requests
import os


CONNECTIONSTRING = "DefaultEndpointsProtocol=https;AccountName=tranlationstorage;AccountKey=iuimicaeQIxYRpLG68SIkexTxyMhKo6wbJbZsxKZXlfixouWJS7mhuNZAIE4k1oCSKzcI+xRI+58+AStyL9coA==;EndpointSuffix=core.windows.net"
INPUT_CONTAINER_NAME = "inputdocs"
OUTPUT_CONTAINER_NAME = "outputdcos"

def home(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['document']
        upload_file(uploaded_file)
        tranlsate_file()
        download_file()
    return render(request, 'landing/home.html')

def upload_file(file):
    upload_container_client = ContainerClient.from_connection_string(CONNECTIONSTRING, INPUT_CONTAINER_NAME)
    print("Uploading files to blob storage...")
    blob_client = upload_container_client.get_blob_client(file.name)
    blob_client.upload_blob(file)
    print(f'{file.name} uploaded to blob storage')

def tranlsate_file():
    endpoint = "https://doctransweb.cognitiveservices.azure.com/translator/text/batch/v1.0"
    subscriptionKey =  '0681f29f74e1415692aad047f82f39fb'
    path = '/batches'
    constructed_url = endpoint + path

    payload= {
        "inputs": [
            {
                "source": {
                    "sourceUrl": "https://tranlationstorage.blob.core.windows.net/inputdocs?sp=racwdli&st=2022-02-27T13:53:06Z&se=2022-03-02T21:53:06Z&spr=https&sv=2020-08-04&sr=c&sig=oXytV7oM%2FCwYiR0nVCLm%2FWFGR5DnzdRYoSBVbN%2BE8Ec%3D",
                    "storageSource": "AzureBlob"
                },
                "targets": [
                    {
                        "targetUrl": "https://tranlationstorage.blob.core.windows.net/outputdcos?sp=racwdli&st=2022-02-27T13:53:50Z&se=2022-03-02T21:53:50Z&spr=https&sv=2020-08-04&sr=c&sig=OAKSXpZlkTkaH897eI4h3IZQRPmT9oZJr2e7h0crH%2Bo%3D",
                        "storageSource": "AzureBlob",
                        "language": "es"
                    }
                ]
            }
        ]
    }
    headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    'Content-Type': 'application/json'
    }

    response = requests.post(constructed_url, headers=headers, json=payload)

    print(f'response status code: {response.status_code}\nresponse status: {response.reason}\nresponse headers: {response.headers}')

def download_file():
    local_path = "C:\\Users\\hp\\translator\\input"
    download_file_path = os.path.join(local_path, 'DOWNLOAD')
    download_container_client = ContainerClient.from_connection_string(CONNECTIONSTRING, OUTPUT_CONTAINER_NAME)
    print("\nDownloading blob to \n\t" + download_file_path)
    my_blobs = download_container_client.list_blobs()
    for blob in my_blobs:
        print(blob.name)
        with open(download_file_path, "wb") as download_file:
            download_file.write(download_container_client.get_blob_client(blob).download_blob().readall())


def about(request):
    return render(request, 'landing/about.html')






