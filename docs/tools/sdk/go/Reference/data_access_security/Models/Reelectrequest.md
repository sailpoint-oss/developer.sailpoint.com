---
id: v1-reelectrequest
title: Reelectrequest
pagination_label: Reelectrequest
sidebar_label: Reelectrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reelectrequest', 'V1Reelectrequest'] 
slug: /tools/sdk/go/dataaccesssecurity/models/reelectrequest
tags: ['SDK', 'Software Development Kit', 'Reelectrequest', 'V1Reelectrequest']
---

# Reelectrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | Pointer to **string** | The UUID of the identity proposed to be re-elected as the resource owner. | [optional] 
**CampaignName** | Pointer to **NullableString** | The name of the campaign or election process for re-electing the owner. | [optional] 
**Reviewers** | Pointer to **[]string** | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [optional] 

## Methods

### NewReelectrequest

`func NewReelectrequest() *Reelectrequest`

NewReelectrequest instantiates a new Reelectrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReelectrequestWithDefaults

`func NewReelectrequestWithDefaults() *Reelectrequest`

NewReelectrequestWithDefaults instantiates a new Reelectrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerId

`func (o *Reelectrequest) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Reelectrequest) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Reelectrequest) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Reelectrequest) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetCampaignName

`func (o *Reelectrequest) GetCampaignName() string`

GetCampaignName returns the CampaignName field if non-nil, zero value otherwise.

### GetCampaignNameOk

`func (o *Reelectrequest) GetCampaignNameOk() (*string, bool)`

GetCampaignNameOk returns a tuple with the CampaignName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignName

`func (o *Reelectrequest) SetCampaignName(v string)`

SetCampaignName sets CampaignName field to given value.

### HasCampaignName

`func (o *Reelectrequest) HasCampaignName() bool`

HasCampaignName returns a boolean if a field has been set.

### SetCampaignNameNil

`func (o *Reelectrequest) SetCampaignNameNil(b bool)`

 SetCampaignNameNil sets the value for CampaignName to be an explicit nil

### UnsetCampaignName
`func (o *Reelectrequest) UnsetCampaignName()`

UnsetCampaignName ensures that no value is present for CampaignName, not even an explicit nil
### GetReviewers

`func (o *Reelectrequest) GetReviewers() []string`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *Reelectrequest) GetReviewersOk() (*[]string, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *Reelectrequest) SetReviewers(v []string)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *Reelectrequest) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### SetReviewersNil

`func (o *Reelectrequest) SetReviewersNil(b bool)`

 SetReviewersNil sets the value for Reviewers to be an explicit nil

### UnsetReviewers
`func (o *Reelectrequest) UnsetReviewers()`

UnsetReviewers ensures that no value is present for Reviewers, not even an explicit nil

