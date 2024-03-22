---
id: delete-campaigns-request
title: DeleteCampaignsRequest
pagination_label: DeleteCampaignsRequest
sidebar_label: DeleteCampaignsRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'DeleteCampaignsRequest'] 
slug: /tools/sdk/go/beta/models/delete-campaigns-request
tags: ['SDK', 'Software Development Kit', 'DeleteCampaignsRequest']
---

# DeleteCampaignsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  Pointer to **[]string** | The ids of the campaigns to delete | [optional] 

## Methods

### NewDeleteCampaignsRequest

`func NewDeleteCampaignsRequest() *DeleteCampaignsRequest`

NewDeleteCampaignsRequest instantiates a new DeleteCampaignsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteCampaignsRequestWithDefaults

`func NewDeleteCampaignsRequestWithDefaults() *DeleteCampaignsRequest`

NewDeleteCampaignsRequestWithDefaults instantiates a new DeleteCampaignsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *DeleteCampaignsRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *DeleteCampaignsRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *DeleteCampaignsRequest) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *DeleteCampaignsRequest) HasIds() bool`

HasIds returns a boolean if a field has been set.


[[Back to top]](#) 


