---
id: v1-campaigncompleteoptions
title: Campaigncompleteoptions
pagination_label: Campaigncompleteoptions
sidebar_label: Campaigncompleteoptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaigncompleteoptions', 'V1Campaigncompleteoptions'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaigncompleteoptions
tags: ['SDK', 'Software Development Kit', 'Campaigncompleteoptions', 'V1Campaigncompleteoptions']
---

# Campaigncompleteoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** | Pointer to **string** | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Methods

### NewCampaigncompleteoptions

`func NewCampaigncompleteoptions() *Campaigncompleteoptions`

NewCampaigncompleteoptions instantiates a new Campaigncompleteoptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaigncompleteoptionsWithDefaults

`func NewCampaigncompleteoptionsWithDefaults() *Campaigncompleteoptions`

NewCampaigncompleteoptionsWithDefaults instantiates a new Campaigncompleteoptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCompleteAction

`func (o *Campaigncompleteoptions) GetAutoCompleteAction() string`

GetAutoCompleteAction returns the AutoCompleteAction field if non-nil, zero value otherwise.

### GetAutoCompleteActionOk

`func (o *Campaigncompleteoptions) GetAutoCompleteActionOk() (*string, bool)`

GetAutoCompleteActionOk returns a tuple with the AutoCompleteAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCompleteAction

`func (o *Campaigncompleteoptions) SetAutoCompleteAction(v string)`

SetAutoCompleteAction sets AutoCompleteAction field to given value.

### HasAutoCompleteAction

`func (o *Campaigncompleteoptions) HasAutoCompleteAction() bool`

HasAutoCompleteAction returns a boolean if a field has been set.


