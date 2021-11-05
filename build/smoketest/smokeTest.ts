import { KinesisClient, PutRecordsCommand, PutRecordsCommandInput, PutRecordsCommandOutput, PutRecordsRequestEntry} from "@aws-sdk/client-kinesis";

/*
 * Example AWS V3 SDK usage
 * process.env
 *  contains: PLATFORM_AWS_ACCESS_KEY_ID, PLATFORM_AWS_SECRET_ACCESS_KEY, PLATFORM_AWS_SESSION_TOKEN
 *  as well as data account: DATA_AWS_ACCESS_KEY_ID, DATA_AWS_SECRET_ACCESS_KEY, DATA_AWS_SESSION_TOKEN
 * 
 * check package.json for appropriate client. In this example, 
 *  npm i @aws-sdk/client-kinesis
*/
const kinesisClient = new KinesisClient({ 
    region: "ap-southeast-2", 
    credentials: {
        accessKeyId: process.env.PLATFORM_AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.PLATFORM_AWS_SECRET_ACCESS_KEY || '',
        sessionToken: process.env.PLATFORM_AWS_SESSION_TOKEN
    }
});

const record: PutRecordsRequestEntry = {
    Data: Buffer.from('{}'),
    PartitionKey: (Math.random() * 100000000).toString()
}

const putRecordInput: PutRecordsCommandInput = {
    Records: [record],
    StreamName: 'example-stream-name'
};

const putRecordCommand = new PutRecordsCommand(putRecordInput);

(async () => {
    console.log(`sending record to kinesisStream`);
    const putRecordResponse: PutRecordsCommandOutput = await kinesisClient.send(putRecordCommand);
    console.log(putRecordResponse);
    // Verify expected result here such as persisted correctly. 
})();