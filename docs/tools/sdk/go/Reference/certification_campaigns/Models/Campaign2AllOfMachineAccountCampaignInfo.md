---
id: v1-campaign2-all-of-machine-account-campaign-info
title: Campaign2AllOfMachineAccountCampaignInfo
pagination_label: Campaign2AllOfMachineAccountCampaignInfo
sidebar_label: Campaign2AllOfMachineAccountCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaign2AllOfMachineAccountCampaignInfo', 'V1Campaign2AllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaign2-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfMachineAccountCampaignInfo', 'V1Campaign2AllOfMachineAccountCampaignInfo']
---

# Campaign2AllOfMachineAccountCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** | Pointer to **[]string** | The list of sources to be included in the campaign. | [optional] 
**ReviewerType** | Pointer to **string** | The reviewer's type. | [optional] 

## Methods

### NewCampaign2AllOfMachineAccountCampaignInfo

`func NewCampaign2AllOfMachineAccountCampaignInfo() *Campaign2AllOfMachineAccountCampaignInfo`

NewCampaign2AllOfMachineAccountCampaignInfo instantiates a new Campaign2AllOfMachineAccountCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaign2AllOfMachineAccountCampaignInfoWithDefaults

`func NewCampaign2AllOfMachineAccountCampaignInfoWithDefaults() *Campaign2AllOfMachineAccountCampaignInfo`

NewCampaign2AllOfMachineAccountCampaignInfoWithDefaults instantiates a new Campaign2AllOfMachineAccountCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceIds

`func (o *Campaign2AllOfMachineAccountCampaignInfo) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *Campaign2AllOfMachineAccountCampaignInfo) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *Campaign2AllOfMachineAccountCampaignInfo) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *Campaign2AllOfMachineAccountCampaignInfo) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetReviewerType

`func (o *Campaign2AllOfMachineAccountCampaignInfo) GetReviewerType() string`

GetReviewerType returns the ReviewerType field if non-nil, zero value otherwise.

### GetReviewerTypeOk

`func (o *Campaign2AllOfMachineAccountCampaignInfo) GetReviewerTypeOk() (*string, bool)`

GetReviewerTypeOk returns a tuple with the ReviewerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerType

`func (o *Campaign2AllOfMachineAccountCampaignInfo) SetReviewerType(v string)`

SetReviewerType sets ReviewerType field to given value.

### HasReviewerType

`func (o *Campaign2AllOfMachineAccountCampaignInfo) HasReviewerType() bool`

HasReviewerType returns a boolean if a field has been set.


