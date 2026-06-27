---
id: v1-sourceusagestatus
title: Sourceusagestatus
pagination_label: Sourceusagestatus
sidebar_label: Sourceusagestatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceusagestatus', 'V1Sourceusagestatus'] 
slug: /tools/sdk/go/sourceusages/models/sourceusagestatus
tags: ['SDK', 'Software Development Kit', 'Sourceusagestatus', 'V1Sourceusagestatus']
---

# Sourceusagestatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 

## Methods

### NewSourceusagestatus

`func NewSourceusagestatus() *Sourceusagestatus`

NewSourceusagestatus instantiates a new Sourceusagestatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceusagestatusWithDefaults

`func NewSourceusagestatusWithDefaults() *Sourceusagestatus`

NewSourceusagestatusWithDefaults instantiates a new Sourceusagestatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *Sourceusagestatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Sourceusagestatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Sourceusagestatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Sourceusagestatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


