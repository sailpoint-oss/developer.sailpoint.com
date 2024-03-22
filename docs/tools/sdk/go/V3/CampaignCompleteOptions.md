---
id: campaign-complete-options
title: CampaignCompleteOptions
pagination_label: CampaignCompleteOptions
sidebar_label: CampaignCompleteOptions
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CampaignCompleteOptions'] 
slug: /tools/sdk/go/v3/models/campaign-complete-options
tags: ['SDK', 'Software Development Kit', 'CampaignCompleteOptions']
---

# CampaignCompleteOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  Pointer to **string** | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Methods

### NewCampaignCompleteOptions

`func NewCampaignCompleteOptions() *CampaignCompleteOptions`

NewCampaignCompleteOptions instantiates a new CampaignCompleteOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignCompleteOptionsWithDefaults

`func NewCampaignCompleteOptionsWithDefaults() *CampaignCompleteOptions`

NewCampaignCompleteOptionsWithDefaults instantiates a new CampaignCompleteOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCompleteAction

`func (o *CampaignCompleteOptions) GetAutoCompleteAction() string`

GetAutoCompleteAction returns the AutoCompleteAction field if non-nil, zero value otherwise.

### GetAutoCompleteActionOk

`func (o *CampaignCompleteOptions) GetAutoCompleteActionOk() (*string, bool)`

GetAutoCompleteActionOk returns a tuple with the AutoCompleteAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCompleteAction

`func (o *CampaignCompleteOptions) SetAutoCompleteAction(v string)`

SetAutoCompleteAction sets AutoCompleteAction field to given value.

### HasAutoCompleteAction

`func (o *CampaignCompleteOptions) HasAutoCompleteAction() bool`

HasAutoCompleteAction returns a boolean if a field has been set.


[[Back to top]](#) 


