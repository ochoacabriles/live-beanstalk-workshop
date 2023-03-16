const AWS = require('aws-sdk');
const { dbTable } = require('../config/environment');

const create = async (item) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: dbTable,
    Item: item,
  };

  const response = await dynamodb.put(params).promise();

  return response;
};

module.exports = create;
