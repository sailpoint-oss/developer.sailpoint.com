---
id: v2024-campaign-alert
title: CampaignAlert
pagination_label: CampaignAlert
sidebar_label: CampaignAlert
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignAlert', 'V2024CampaignAlert'] 
slug: /tools/sdk/go/v2024/models/campaign-alert
tags: ['SDK', 'Software Development Kit', 'CampaignAlert', 'V2024CampaignAlert']
---

# CampaignAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** | Pointer to **string** | Denotes the level of the message | [optional] 
**Localizations** | Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Methods

### NewCampaignAlert

`func NewCampaignAlert() *CampaignAlert`

NewCampaignAlert instantiates a new CampaignAlert object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignAlertWithDefaults

`func NewCampaignAlertWithDefaults() *CampaignAlert`

NewCampaignAlertWithDefaults instantiates a new CampaignAlert object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLevel

`func (o *CampaignAlert) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *CampaignAlert) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *CampaignAlert) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *CampaignAlert) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetLocalizations

`func (o *CampaignAlert) GetLocalizations() []ErrorMessageDto`

GetLocalizations returns the Localizations field if non-nil, zero value otherwise.

### GetLocalizationsOk

`func (o *CampaignAlert) GetLocalizationsOk() (*[]ErrorMessageDto, bool)`

GetLocalizationsOk returns a tuple with the Localizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizations

`func (o *CampaignAlert) SetLocalizations(v []ErrorMessageDto)`

SetLocalizations sets Localizations field to given value.

### HasLocalizations

`func (o *CampaignAlert) HasLocalizations() bool`

HasLocalizations returns a boolean if a field has been set.


