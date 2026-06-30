---
id: v1-connectordetail-v1
title: ConnectordetailV1
pagination_label: ConnectordetailV1
sidebar_label: ConnectordetailV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ConnectordetailV1', 'v1ConnectordetailV1']
slug: /tools/sdk/typescript/sources/models/connectordetail-v1
tags: ['SDK', 'Software Development Kit', 'ConnectordetailV1', 'v1ConnectordetailV1']
---

# ConnectordetailV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The connector name | [default to undefined]
**type** | **(optional)** `string` | The connector type | [default to undefined]
**className** | **(optional)** `string` | The connector class name | [default to undefined]
**scriptName** | **(optional)** `string` | The connector script name | [default to undefined]
**applicationXml** | **(optional)** `string` | The connector application xml | [default to undefined]
**correlationConfigXml** | **(optional)** `string` | The connector correlation config xml | [default to undefined]
**sourceConfigXml** | **(optional)** `string` | The connector source config xml | [default to undefined]
**sourceConfig** | **(optional)** `string` | The connector source config | [default to undefined]
**sourceConfigFrom** | **(optional)** `string` | The connector source config origin | [default to undefined]
**s3Location** | **(optional)** `string` | storage path key for this connector | [default to undefined]
**uploadedFiles** | **(optional)** `Array<string>` | The list of uploaded files supported by the connector. If there was any executable files uploaded to thee connector. Typically this be empty as the executable be uploaded at source creation. | [default to undefined]
**fileUpload** | **(optional)** `boolean` | true if the source is file upload | [default to false]
**directConnect** | **(optional)** `boolean` | true if the source is a direct connect source | [default to false]
**translationProperties** | **(optional)**  | A map containing translation attributes by loacale key | [default to undefined]
**connectorMetadata** | **(optional)**  | A map containing metadata pertinent to the UI to be used | [default to undefined]
**status** | **(optional)** `string` | The connector status | [default to undefined]

