const AWS = require('aws-sdk');

const create = async (item) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: 'product_inventory',
    Item: item,
  };

  const response = await dynamodb.put(params).promise();

  return response;
};

module.exports = create;
