---
id: beta-manually-updated-fields-dto
title: ManuallyUpdatedFieldsDTO
pagination_label: ManuallyUpdatedFieldsDTO
sidebar_label: ManuallyUpdatedFieldsDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManuallyUpdatedFieldsDTO', 'BetaManuallyUpdatedFieldsDTO'] 
slug: /tools/sdk/go/beta/models/manually-updated-fields-dto
tags: ['SDK', 'Software Development Kit', 'ManuallyUpdatedFieldsDTO', 'BetaManuallyUpdatedFieldsDTO']
---

# ManuallyUpdatedFieldsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DISPLAY_NAME** | Pointer to **bool** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) &gt; &#x60;name&#x60; property. | [optional] [default to false]
**DESCRIPTION** | Pointer to **bool** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) &gt; &#x60;description&#x60; property. | [optional] [default to false]

## Methods

### NewManuallyUpdatedFieldsDTO

`func NewManuallyUpdatedFieldsDTO() *ManuallyUpdatedFieldsDTO`

NewManuallyUpdatedFieldsDTO instantiates a new ManuallyUpdatedFieldsDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManuallyUpdatedFieldsDTOWithDefaults

`func NewManuallyUpdatedFieldsDTOWithDefaults() *ManuallyUpdatedFieldsDTO`

NewManuallyUpdatedFieldsDTOWithDefaults instantiates a new ManuallyUpdatedFieldsDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDISPLAY_NAME

`func (o *ManuallyUpdatedFieldsDTO) GetDISPLAY_NAME() bool`

GetDISPLAY_NAME returns the DISPLAY_NAME field if non-nil, zero value otherwise.

### GetDISPLAY_NAMEOk

`func (o *ManuallyUpdatedFieldsDTO) GetDISPLAY_NAMEOk() (*bool, bool)`

GetDISPLAY_NAMEOk returns a tuple with the DISPLAY_NAME field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDISPLAY_NAME

`func (o *ManuallyUpdatedFieldsDTO) SetDISPLAY_NAME(v bool)`

SetDISPLAY_NAME sets DISPLAY_NAME field to given value.

### HasDISPLAY_NAME

`func (o *ManuallyUpdatedFieldsDTO) HasDISPLAY_NAME() bool`

HasDISPLAY_NAME returns a boolean if a field has been set.

### GetDESCRIPTION

`func (o *ManuallyUpdatedFieldsDTO) GetDESCRIPTION() bool`

GetDESCRIPTION returns the DESCRIPTION field if non-nil, zero value otherwise.

### GetDESCRIPTIONOk

`func (o *ManuallyUpdatedFieldsDTO) GetDESCRIPTIONOk() (*bool, bool)`

GetDESCRIPTIONOk returns a tuple with the DESCRIPTION field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDESCRIPTION

`func (o *ManuallyUpdatedFieldsDTO) SetDESCRIPTION(v bool)`

SetDESCRIPTION sets DESCRIPTION field to given value.

### HasDESCRIPTION

`func (o *ManuallyUpdatedFieldsDTO) HasDESCRIPTION() bool`

HasDESCRIPTION returns a boolean if a field has been set.


