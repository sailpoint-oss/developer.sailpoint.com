---
id: v2025-campaign-all-of-machine-account-campaign-info
title: CampaignAllOfMachineAccountCampaignInfo
pagination_label: CampaignAllOfMachineAccountCampaignInfo
sidebar_label: CampaignAllOfMachineAccountCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignAllOfMachineAccountCampaignInfo', 'V2025CampaignAllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/go/v2025/models/campaign-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfMachineAccountCampaignInfo', 'V2025CampaignAllOfMachineAccountCampaignInfo']
---

# CampaignAllOfMachineAccountCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** | Pointer to **[]string** | The list of sources to be included in the campaign. | [optional] 
**ReviewerType** | Pointer to **string** | The reviewer's type. | [optional] 

## Methods

### NewCampaignAllOfMachineAccountCampaignInfo

`func NewCampaignAllOfMachineAccountCampaignInfo() *CampaignAllOfMachineAccountCampaignInfo`

NewCampaignAllOfMachineAccountCampaignInfo instantiates a new CampaignAllOfMachineAccountCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignAllOfMachineAccountCampaignInfoWithDefaults

`func NewCampaignAllOfMachineAccountCampaignInfoWithDefaults() *CampaignAllOfMachineAccountCampaignInfo`

NewCampaignAllOfMachineAccountCampaignInfoWithDefaults instantiates a new CampaignAllOfMachineAccountCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceIds

`func (o *CampaignAllOfMachineAccountCampaignInfo) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *CampaignAllOfMachineAccountCampaignInfo) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *CampaignAllOfMachineAccountCampaignInfo) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *CampaignAllOfMachineAccountCampaignInfo) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetReviewerType

`func (o *CampaignAllOfMachineAccountCampaignInfo) GetReviewerType() string`

GetReviewerType returns the ReviewerType field if non-nil, zero value otherwise.

### GetReviewerTypeOk

`func (o *CampaignAllOfMachineAccountCampaignInfo) GetReviewerTypeOk() (*string, bool)`

GetReviewerTypeOk returns a tuple with the ReviewerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerType

`func (o *CampaignAllOfMachineAccountCampaignInfo) SetReviewerType(v string)`

SetReviewerType sets ReviewerType field to given value.

### HasReviewerType

`func (o *CampaignAllOfMachineAccountCampaignInfo) HasReviewerType() bool`

HasReviewerType returns a boolean if a field has been set.


