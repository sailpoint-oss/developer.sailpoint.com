---
id: beta-entitlement-manually-updated-fields
title: EntitlementManuallyUpdatedFields
pagination_label: EntitlementManuallyUpdatedFields
sidebar_label: EntitlementManuallyUpdatedFields
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementManuallyUpdatedFields', 'BetaEntitlementManuallyUpdatedFields'] 
slug: /tools/sdk/go/beta/models/entitlement-manually-updated-fields
tags: ['SDK', 'Software Development Kit', 'EntitlementManuallyUpdatedFields', 'BetaEntitlementManuallyUpdatedFields']
---

# EntitlementManuallyUpdatedFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DISPLAY_NAME** | Pointer to **bool** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) &gt; &#x60;name&#x60; property. | [optional] [default to false]
**DESCRIPTION** | Pointer to **bool** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) &gt; &#x60;description&#x60; property. | [optional] [default to false]

## Methods

### NewEntitlementManuallyUpdatedFields

`func NewEntitlementManuallyUpdatedFields() *EntitlementManuallyUpdatedFields`

NewEntitlementManuallyUpdatedFields instantiates a new EntitlementManuallyUpdatedFields object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementManuallyUpdatedFieldsWithDefaults

`func NewEntitlementManuallyUpdatedFieldsWithDefaults() *EntitlementManuallyUpdatedFields`

NewEntitlementManuallyUpdatedFieldsWithDefaults instantiates a new EntitlementManuallyUpdatedFields object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDISPLAY_NAME

`func (o *EntitlementManuallyUpdatedFields) GetDISPLAY_NAME() bool`

GetDISPLAY_NAME returns the DISPLAY_NAME field if non-nil, zero value otherwise.

### GetDISPLAY_NAMEOk

`func (o *EntitlementManuallyUpdatedFields) GetDISPLAY_NAMEOk() (*bool, bool)`

GetDISPLAY_NAMEOk returns a tuple with the DISPLAY_NAME field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDISPLAY_NAME

`func (o *EntitlementManuallyUpdatedFields) SetDISPLAY_NAME(v bool)`

SetDISPLAY_NAME sets DISPLAY_NAME field to given value.

### HasDISPLAY_NAME

`func (o *EntitlementManuallyUpdatedFields) HasDISPLAY_NAME() bool`

HasDISPLAY_NAME returns a boolean if a field has been set.

### GetDESCRIPTION

`func (o *EntitlementManuallyUpdatedFields) GetDESCRIPTION() bool`

GetDESCRIPTION returns the DESCRIPTION field if non-nil, zero value otherwise.

### GetDESCRIPTIONOk

`func (o *EntitlementManuallyUpdatedFields) GetDESCRIPTIONOk() (*bool, bool)`

GetDESCRIPTIONOk returns a tuple with the DESCRIPTION field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDESCRIPTION

`func (o *EntitlementManuallyUpdatedFields) SetDESCRIPTION(v bool)`

SetDESCRIPTION sets DESCRIPTION field to given value.

### HasDESCRIPTION

`func (o *EntitlementManuallyUpdatedFields) HasDESCRIPTION() bool`

HasDESCRIPTION returns a boolean if a field has been set.


