---
id: v1-deployrequest
title: Deployrequest
pagination_label: Deployrequest
sidebar_label: Deployrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Deployrequest', 'V1Deployrequest'] 
slug: /tools/sdk/go/configurationhub/models/deployrequest
tags: ['SDK', 'Software Development Kit', 'Deployrequest', 'V1Deployrequest']
---

# Deployrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DraftId** | **string** | The id of the draft to be used by this deploy. | 

## Methods

### NewDeployrequest

`func NewDeployrequest(draftId string, ) *Deployrequest`

NewDeployrequest instantiates a new Deployrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeployrequestWithDefaults

`func NewDeployrequestWithDefaults() *Deployrequest`

NewDeployrequestWithDefaults instantiates a new Deployrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDraftId

`func (o *Deployrequest) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *Deployrequest) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *Deployrequest) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.



