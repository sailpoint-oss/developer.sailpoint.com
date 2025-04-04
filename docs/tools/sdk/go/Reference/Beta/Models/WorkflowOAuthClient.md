---
id: beta-workflow-o-auth-client
title: WorkflowOAuthClient
pagination_label: WorkflowOAuthClient
sidebar_label: WorkflowOAuthClient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowOAuthClient', 'BetaWorkflowOAuthClient'] 
slug: /tools/sdk/go/beta/models/workflow-o-auth-client
tags: ['SDK', 'Software Development Kit', 'WorkflowOAuthClient', 'BetaWorkflowOAuthClient']
---

# WorkflowOAuthClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | OAuth client ID for the trigger. This is a UUID generated upon creation. | [optional] 
**Secret** | Pointer to **string** | OAuthClient secret. | [optional] 
**Url** | Pointer to **string** | URL for the external trigger to invoke | [optional] 

## Methods

### NewWorkflowOAuthClient

`func NewWorkflowOAuthClient() *WorkflowOAuthClient`

NewWorkflowOAuthClient instantiates a new WorkflowOAuthClient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowOAuthClientWithDefaults

`func NewWorkflowOAuthClientWithDefaults() *WorkflowOAuthClient`

NewWorkflowOAuthClientWithDefaults instantiates a new WorkflowOAuthClient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowOAuthClient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowOAuthClient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowOAuthClient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowOAuthClient) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSecret

`func (o *WorkflowOAuthClient) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *WorkflowOAuthClient) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *WorkflowOAuthClient) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *WorkflowOAuthClient) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetUrl

`func (o *WorkflowOAuthClient) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *WorkflowOAuthClient) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *WorkflowOAuthClient) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *WorkflowOAuthClient) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


