import boto3


ACCESS_KEY_ID = "abcdefghijklmnopqrst"                      
SECRET_ACCESS_KEY = "abcdefghijklmnopqrstuvwxyz"

print("Connecting to AWS Client...")
s3_client = boto3.client('s3',
    aws_access_key_id=ACCESS_KEY_ID,
    aws_secret_access_key=SECRET_ACCESS_KEY)

print("Retrieving all the S3 buckets...")
# List all buckets
response = s3_client.list_buckets()

# Initialize a list to store bucket information
bucket_info = []

print("Getting all the information for S3 buckets...")
# Iterate through each bucket
for bucket in response['Buckets']:
    bucket_name = bucket['Name']
    
    # Get bucket creation date and region
    bucket_location = s3_client.get_bucket_location(Bucket=bucket_name)
    #bucket_creation_date = bucket['CreationDate']
    bucket_region = bucket_location.get('LocationConstraint', 'us-east-1')  # Default to us-east-1 if no region is specified
    
    # Get bucket owner
    bucket_owner_response = s3_client.get_bucket_acl(Bucket=bucket_name)
    bucket_owner_id = bucket_owner_response['Owner']['ID']

    bucket_info.append([bucket_name, bucket_region])     #bucket_creation_date,

print("Listed below are the S3 buckets which are accessible: ")
