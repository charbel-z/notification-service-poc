bucket_name=au-slyp-$newenv-sam-merchant-infra  # Where the templates will be stored
stack_name=   # $entity-service
built_template_name=parent-built.yaml

# builds local directory .aws-sam/ which will check for MakeFiles
sam build -t parent-template.yaml

# puts the results of sam build above into s3 into an output template file
sam package --profile team --output-template-file $built_template_name --s3-bucket $bucket_name

# can deploy the output template file of same package since its all in s3 now
aws cloudformation --profile team deploy --template-file $built_template_name --stack-name $stack_name --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND --s3-bucket=$bucket_name
