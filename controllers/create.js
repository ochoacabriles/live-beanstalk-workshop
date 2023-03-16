const AWS = require('aws-sdk');
const { dbTable, topicArn } = require('../config/environment');

const create = async (item) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: dbTable,
    Item: item,
  };

  const response = await dynamodb.put(params).promise();

  const sns = new AWS.SNS();
  await sns.publish({
    Message: `Product ${item.name} was added`,
    Subject: 'New product added',
    TopicArn: topicArn,
  }).promise();

  return response;
};

module.exports = create;
