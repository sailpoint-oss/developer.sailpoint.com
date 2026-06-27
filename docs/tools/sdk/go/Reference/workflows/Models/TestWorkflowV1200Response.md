---
id: v1-test-workflow-v1200-response
title: TestWorkflowV1200Response
pagination_label: TestWorkflowV1200Response
sidebar_label: TestWorkflowV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TestWorkflowV1200Response', 'V1TestWorkflowV1200Response'] 
slug: /tools/sdk/go/workflows/models/test-workflow-v1200-response
tags: ['SDK', 'Software Development Kit', 'TestWorkflowV1200Response', 'V1TestWorkflowV1200Response']
---

# TestWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | Pointer to **string** | The workflow execution id | [optional] 

## Methods

### NewTestWorkflowV1200Response

`func NewTestWorkflowV1200Response() *TestWorkflowV1200Response`

NewTestWorkflowV1200Response instantiates a new TestWorkflowV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestWorkflowV1200ResponseWithDefaults

`func NewTestWorkflowV1200ResponseWithDefaults() *TestWorkflowV1200Response`

NewTestWorkflowV1200ResponseWithDefaults instantiates a new TestWorkflowV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkflowExecutionId

`func (o *TestWorkflowV1200Response) GetWorkflowExecutionId() string`

GetWorkflowExecutionId returns the WorkflowExecutionId field if non-nil, zero value otherwise.

### GetWorkflowExecutionIdOk

`func (o *TestWorkflowV1200Response) GetWorkflowExecutionIdOk() (*string, bool)`

GetWorkflowExecutionIdOk returns a tuple with the WorkflowExecutionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowExecutionId

`func (o *TestWorkflowV1200Response) SetWorkflowExecutionId(v string)`

SetWorkflowExecutionId sets WorkflowExecutionId field to given value.

### HasWorkflowExecutionId

`func (o *TestWorkflowV1200Response) HasWorkflowExecutionId() bool`

HasWorkflowExecutionId returns a boolean if a field has been set.


