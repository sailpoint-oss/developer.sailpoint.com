---
id: v1-campaignalert
title: Campaignalert
pagination_label: Campaignalert
sidebar_label: Campaignalert
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaignalert', 'V1Campaignalert'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaignalert
tags: ['SDK', 'Software Development Kit', 'Campaignalert', 'V1Campaignalert']
---

# Campaignalert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** | Pointer to **string** | Denotes the level of the message | [optional] 
**Localizations** | Pointer to [**[]Errormessagedto**](errormessagedto) |  | [optional] 

## Methods

### NewCampaignalert

`func NewCampaignalert() *Campaignalert`

NewCampaignalert instantiates a new Campaignalert object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignalertWithDefaults

`func NewCampaignalertWithDefaults() *Campaignalert`

NewCampaignalertWithDefaults instantiates a new Campaignalert object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLevel

`func (o *Campaignalert) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *Campaignalert) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *Campaignalert) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *Campaignalert) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetLocalizations

`func (o *Campaignalert) GetLocalizations() []Errormessagedto`

GetLocalizations returns the Localizations field if non-nil, zero value otherwise.

### GetLocalizationsOk

`func (o *Campaignalert) GetLocalizationsOk() (*[]Errormessagedto, bool)`

GetLocalizationsOk returns a tuple with the Localizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizations

`func (o *Campaignalert) SetLocalizations(v []Errormessagedto)`

SetLocalizations sets Localizations field to given value.

### HasLocalizations

`func (o *Campaignalert) HasLocalizations() bool`

HasLocalizations returns a boolean if a field has been set.


