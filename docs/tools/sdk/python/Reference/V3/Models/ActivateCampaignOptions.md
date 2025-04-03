---
id: activate-campaign-options
title: ActivateCampaignOptions
pagination_label: ActivateCampaignOptions
sidebar_label: ActivateCampaignOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ActivateCampaignOptions', 'ActivateCampaignOptions'] 
slug: /tools/sdk/go/v3/models/activate-campaign-options
tags: ['SDK', 'Software Development Kit', 'ActivateCampaignOptions', 'ActivateCampaignOptions']
---

# ActivateCampaignOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeZone** | Pointer to **string** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to "Z"]

## Methods

### NewActivateCampaignOptions

`func NewActivateCampaignOptions() *ActivateCampaignOptions`

NewActivateCampaignOptions instantiates a new ActivateCampaignOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivateCampaignOptionsWithDefaults

`func NewActivateCampaignOptionsWithDefaults() *ActivateCampaignOptions`

NewActivateCampaignOptionsWithDefaults instantiates a new ActivateCampaignOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeZone

`func (o *ActivateCampaignOptions) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *ActivateCampaignOptions) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *ActivateCampaignOptions) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *ActivateCampaignOptions) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.


