---
id: v1-activatecampaignoptions
title: Activatecampaignoptions
pagination_label: Activatecampaignoptions
sidebar_label: Activatecampaignoptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Activatecampaignoptions', 'V1Activatecampaignoptions'] 
slug: /tools/sdk/go/certificationcampaigns/models/activatecampaignoptions
tags: ['SDK', 'Software Development Kit', 'Activatecampaignoptions', 'V1Activatecampaignoptions']
---

# Activatecampaignoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeZone** | Pointer to **string** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to "Z"]

## Methods

### NewActivatecampaignoptions

`func NewActivatecampaignoptions() *Activatecampaignoptions`

NewActivatecampaignoptions instantiates a new Activatecampaignoptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivatecampaignoptionsWithDefaults

`func NewActivatecampaignoptionsWithDefaults() *Activatecampaignoptions`

NewActivatecampaignoptionsWithDefaults instantiates a new Activatecampaignoptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeZone

`func (o *Activatecampaignoptions) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *Activatecampaignoptions) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *Activatecampaignoptions) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *Activatecampaignoptions) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.


