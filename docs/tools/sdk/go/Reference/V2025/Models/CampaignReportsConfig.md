---
id: v2025-campaign-reports-config
title: CampaignReportsConfig
pagination_label: CampaignReportsConfig
sidebar_label: CampaignReportsConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignReportsConfig', 'V2025CampaignReportsConfig'] 
slug: /tools/sdk/go/v2025/models/campaign-reports-config
tags: ['SDK', 'Software Development Kit', 'CampaignReportsConfig', 'V2025CampaignReportsConfig']
---

# CampaignReportsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeColumns** | Pointer to **[]string** | list of identity attribute columns | [optional] 

## Methods

### NewCampaignReportsConfig

`func NewCampaignReportsConfig() *CampaignReportsConfig`

NewCampaignReportsConfig instantiates a new CampaignReportsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignReportsConfigWithDefaults

`func NewCampaignReportsConfigWithDefaults() *CampaignReportsConfig`

NewCampaignReportsConfigWithDefaults instantiates a new CampaignReportsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityAttributeColumns

`func (o *CampaignReportsConfig) GetIdentityAttributeColumns() []string`

GetIdentityAttributeColumns returns the IdentityAttributeColumns field if non-nil, zero value otherwise.

### GetIdentityAttributeColumnsOk

`func (o *CampaignReportsConfig) GetIdentityAttributeColumnsOk() (*[]string, bool)`

GetIdentityAttributeColumnsOk returns a tuple with the IdentityAttributeColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeColumns

`func (o *CampaignReportsConfig) SetIdentityAttributeColumns(v []string)`

SetIdentityAttributeColumns sets IdentityAttributeColumns field to given value.

### HasIdentityAttributeColumns

`func (o *CampaignReportsConfig) HasIdentityAttributeColumns() bool`

HasIdentityAttributeColumns returns a boolean if a field has been set.

### SetIdentityAttributeColumnsNil

`func (o *CampaignReportsConfig) SetIdentityAttributeColumnsNil(b bool)`

 SetIdentityAttributeColumnsNil sets the value for IdentityAttributeColumns to be an explicit nil

### UnsetIdentityAttributeColumns
`func (o *CampaignReportsConfig) UnsetIdentityAttributeColumns()`

UnsetIdentityAttributeColumns ensures that no value is present for IdentityAttributeColumns, not even an explicit nil

