---
id: v1-campaignreportsconfig
title: Campaignreportsconfig
pagination_label: Campaignreportsconfig
sidebar_label: Campaignreportsconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaignreportsconfig', 'V1Campaignreportsconfig'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaignreportsconfig
tags: ['SDK', 'Software Development Kit', 'Campaignreportsconfig', 'V1Campaignreportsconfig']
---

# Campaignreportsconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeColumns** | Pointer to **[]string** | list of identity attribute columns | [optional] 

## Methods

### NewCampaignreportsconfig

`func NewCampaignreportsconfig() *Campaignreportsconfig`

NewCampaignreportsconfig instantiates a new Campaignreportsconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignreportsconfigWithDefaults

`func NewCampaignreportsconfigWithDefaults() *Campaignreportsconfig`

NewCampaignreportsconfigWithDefaults instantiates a new Campaignreportsconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityAttributeColumns

`func (o *Campaignreportsconfig) GetIdentityAttributeColumns() []string`

GetIdentityAttributeColumns returns the IdentityAttributeColumns field if non-nil, zero value otherwise.

### GetIdentityAttributeColumnsOk

`func (o *Campaignreportsconfig) GetIdentityAttributeColumnsOk() (*[]string, bool)`

GetIdentityAttributeColumnsOk returns a tuple with the IdentityAttributeColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeColumns

`func (o *Campaignreportsconfig) SetIdentityAttributeColumns(v []string)`

SetIdentityAttributeColumns sets IdentityAttributeColumns field to given value.

### HasIdentityAttributeColumns

`func (o *Campaignreportsconfig) HasIdentityAttributeColumns() bool`

HasIdentityAttributeColumns returns a boolean if a field has been set.

### SetIdentityAttributeColumnsNil

`func (o *Campaignreportsconfig) SetIdentityAttributeColumnsNil(b bool)`

 SetIdentityAttributeColumnsNil sets the value for IdentityAttributeColumns to be an explicit nil

### UnsetIdentityAttributeColumns
`func (o *Campaignreportsconfig) UnsetIdentityAttributeColumns()`

UnsetIdentityAttributeColumns ensures that no value is present for IdentityAttributeColumns, not even an explicit nil

