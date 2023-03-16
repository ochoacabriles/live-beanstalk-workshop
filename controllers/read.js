const AWS = require('aws-sdk');
const { dbTable } = require('../config/environment');

const read = async () => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const scanParams = {
    TableName: dbTable,
  };

  console.log(`scanParams: ${JSON.stringify(scanParams)}`);

  let dynamoData = await dynamodb.scan(scanParams).promise();

  const items = dynamoData.Items;
  while (dynamoData.LastEvaluatedKey) {
    scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
    dynamoData = await dynamodb.scan(scanParams).promise();
    items.push(...dynamoData.Items);
  }
  return items;
};

module.exports = read;
