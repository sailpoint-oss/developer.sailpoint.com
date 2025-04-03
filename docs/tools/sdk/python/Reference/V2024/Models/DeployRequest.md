---
id: v2024-deploy-request
title: DeployRequest
pagination_label: DeployRequest
sidebar_label: DeployRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeployRequest', 'V2024DeployRequest'] 
slug: /tools/sdk/go/v2024/models/deploy-request
tags: ['SDK', 'Software Development Kit', 'DeployRequest', 'V2024DeployRequest']
---

# DeployRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DraftId** | **string** | The id of the draft to be used by this deploy. | 

## Methods

### NewDeployRequest

`func NewDeployRequest(draftId string, ) *DeployRequest`

NewDeployRequest instantiates a new DeployRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeployRequestWithDefaults

`func NewDeployRequestWithDefaults() *DeployRequest`

NewDeployRequestWithDefaults instantiates a new DeployRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDraftId

`func (o *DeployRequest) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *DeployRequest) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *DeployRequest) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.



