---
id: complete-campaign-options
title: CompleteCampaignOptions
pagination_label: CompleteCampaignOptions
sidebar_label: CompleteCampaignOptions
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CompleteCampaignOptions'] 
slug: /tools/sdk/go/beta/models/complete-campaign-options
tags: ['SDK', 'Software Development Kit', 'CompleteCampaignOptions']
---

# CompleteCampaignOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  Pointer to **string** | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Methods

### NewCompleteCampaignOptions

`func NewCompleteCampaignOptions() *CompleteCampaignOptions`

NewCompleteCampaignOptions instantiates a new CompleteCampaignOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteCampaignOptionsWithDefaults

`func NewCompleteCampaignOptionsWithDefaults() *CompleteCampaignOptions`

NewCompleteCampaignOptionsWithDefaults instantiates a new CompleteCampaignOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCompleteAction

`func (o *CompleteCampaignOptions) GetAutoCompleteAction() string`

GetAutoCompleteAction returns the AutoCompleteAction field if non-nil, zero value otherwise.

### GetAutoCompleteActionOk

`func (o *CompleteCampaignOptions) GetAutoCompleteActionOk() (*string, bool)`

GetAutoCompleteActionOk returns a tuple with the AutoCompleteAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCompleteAction

`func (o *CompleteCampaignOptions) SetAutoCompleteAction(v string)`

SetAutoCompleteAction sets AutoCompleteAction field to given value.

### HasAutoCompleteAction

`func (o *CompleteCampaignOptions) HasAutoCompleteAction() bool`

HasAutoCompleteAction returns a boolean if a field has been set.


[[Back to top]](#) 


