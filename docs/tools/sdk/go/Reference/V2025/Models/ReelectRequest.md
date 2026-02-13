---
id: v2025-reelect-request
title: ReelectRequest
pagination_label: ReelectRequest
sidebar_label: ReelectRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReelectRequest', 'V2025ReelectRequest'] 
slug: /tools/sdk/go/v2025/models/reelect-request
tags: ['SDK', 'Software Development Kit', 'ReelectRequest', 'V2025ReelectRequest']
---

# ReelectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | Pointer to **string** | The UUID of the identity proposed to be re-elected as the resource owner. | [optional] 
**CampaignName** | Pointer to **NullableString** | The name of the campaign or election process for re-electing the owner. | [optional] 
**Reviewers** | Pointer to **[]string** | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [optional] 

## Methods

### NewReelectRequest

`func NewReelectRequest() *ReelectRequest`

NewReelectRequest instantiates a new ReelectRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReelectRequestWithDefaults

`func NewReelectRequestWithDefaults() *ReelectRequest`

NewReelectRequestWithDefaults instantiates a new ReelectRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerId

`func (o *ReelectRequest) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *ReelectRequest) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *ReelectRequest) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *ReelectRequest) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetCampaignName

`func (o *ReelectRequest) GetCampaignName() string`

GetCampaignName returns the CampaignName field if non-nil, zero value otherwise.

### GetCampaignNameOk

`func (o *ReelectRequest) GetCampaignNameOk() (*string, bool)`

GetCampaignNameOk returns a tuple with the CampaignName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignName

`func (o *ReelectRequest) SetCampaignName(v string)`

SetCampaignName sets CampaignName field to given value.

### HasCampaignName

`func (o *ReelectRequest) HasCampaignName() bool`

HasCampaignName returns a boolean if a field has been set.

### SetCampaignNameNil

`func (o *ReelectRequest) SetCampaignNameNil(b bool)`

 SetCampaignNameNil sets the value for CampaignName to be an explicit nil

### UnsetCampaignName
`func (o *ReelectRequest) UnsetCampaignName()`

UnsetCampaignName ensures that no value is present for CampaignName, not even an explicit nil
### GetReviewers

`func (o *ReelectRequest) GetReviewers() []string`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *ReelectRequest) GetReviewersOk() (*[]string, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *ReelectRequest) SetReviewers(v []string)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *ReelectRequest) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### SetReviewersNil

`func (o *ReelectRequest) SetReviewersNil(b bool)`

 SetReviewersNil sets the value for Reviewers to be an explicit nil

### UnsetReviewers
`func (o *ReelectRequest) UnsetReviewers()`

UnsetReviewers ensures that no value is present for Reviewers, not even an explicit nil

