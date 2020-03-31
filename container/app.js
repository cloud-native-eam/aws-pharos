/*
 * Serviecs read: s3, ec2, dynamo, rds, redshift, aurora, elasticcache, sqs, swf, sns, api gateways, kinesis, lambda, 
 * 
 * TODO: vpc, security groups, elbs, 
 * 
**/


// Load the SDK
var AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

AWS.config.apiVersions = {
  //athena: '2017-05-18',
  dynamodb: '2012-08-10',
  ec2: '2016-11-15',
  //elasticache: '2015-02-02',
  kinesis: '2013-12-02',
  lambda: '2015-03-31',
  rds: '2014-10-31',
  redshift: '2012-12-01',
  s3: '2006-03-01',
  //sns: '2010-03-31',
  sqs: '2012-11-05'
  //swf: '2012-01-25'
  // other service API versions
};

// Create an Athena client
//var athena = new AWS.Athena();
// List Athena ?
//athena.listWorkGroups(responseFunction);

// Create a DynamoDB client
var dynamodb  = new AWS.DynamoDB();
// List Dynamo Tables
dynamodb.listTables(responseFunction);

// Create an EC2 client
var ec2 = new AWS.EC2();
// List EC2 instances
ec2.describeInstances(responseFunction);

// Create an ElastiCache client
var elasticache = new AWS.ElastiCache();
// List ElastiCache ?
//elasticache.describeCacheClusters(responseFunction);

// Create a Kinesis client
var kinesis = new AWS.Kinesis();
// List Kinesis
kinesis.listStreams(responseFunction);

// Create a Lambda client
var lambda = new AWS.Lambda();
// List Lambdas
lambda.listFunctions(responseFunction);

// Create a RDS client
var rds = new AWS.RDS();
// List RDS Instances
rds.describeDBInstances(responseFunction);

// Create a Redshift client
var redshift = new AWS.Redshift();
// List Redshift ?

// Create an S3 client
var s3 = new AWS.S3();
// List Buckets
s3.listBuckets(responseFunction);

// Create an SNS client
var sns = new AWS.SNS();
// List Subscriptions ? 
//sns.listSubscriptions(responseFunction);

// Create an SNS client
var sqs = new AWS.SQS();
// List SQS queues
sqs.listQueues(responseFunction);




function responseFunction(err, data){
  if(err){
	  console.log(err, err.stack); // an error occurred
  }else{
	  console.log(data); // successful response
  }          
}