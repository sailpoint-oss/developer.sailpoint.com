---
id: v2026-bulk-approve-entitlement-recommendation-item
title: BulkApproveEntitlementRecommendationItem
pagination_label: BulkApproveEntitlementRecommendationItem
sidebar_label: BulkApproveEntitlementRecommendationItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkApproveEntitlementRecommendationItem', 'V2026BulkApproveEntitlementRecommendationItem'] 
slug: /tools/sdk/go/v2026/models/bulk-approve-entitlement-recommendation-item
tags: ['SDK', 'Software Development Kit', 'BulkApproveEntitlementRecommendationItem', 'V2026BulkApproveEntitlementRecommendationItem']
---

# BulkApproveEntitlementRecommendationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the recommendation record to approve. | 
**RecordType** | Pointer to **NullableString** | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [optional] 
**Description** | Pointer to **NullableString** | The approved description text. Required for SED-type items; ignored for privilege items. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The approved privilege level. Required for privilege-type items; ignored for SED items. | [optional] 

## Methods

### NewBulkApproveEntitlementRecommendationItem

`func NewBulkApproveEntitlementRecommendationItem(id string, ) *BulkApproveEntitlementRecommendationItem`

NewBulkApproveEntitlementRecommendationItem instantiates a new BulkApproveEntitlementRecommendationItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkApproveEntitlementRecommendationItemWithDefaults

`func NewBulkApproveEntitlementRecommendationItemWithDefaults() *BulkApproveEntitlementRecommendationItem`

NewBulkApproveEntitlementRecommendationItemWithDefaults instantiates a new BulkApproveEntitlementRecommendationItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BulkApproveEntitlementRecommendationItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BulkApproveEntitlementRecommendationItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BulkApproveEntitlementRecommendationItem) SetId(v string)`

SetId sets Id field to given value.


### GetRecordType

`func (o *BulkApproveEntitlementRecommendationItem) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *BulkApproveEntitlementRecommendationItem) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *BulkApproveEntitlementRecommendationItem) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *BulkApproveEntitlementRecommendationItem) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### SetRecordTypeNil

`func (o *BulkApproveEntitlementRecommendationItem) SetRecordTypeNil(b bool)`

 SetRecordTypeNil sets the value for RecordType to be an explicit nil

### UnsetRecordType
`func (o *BulkApproveEntitlementRecommendationItem) UnsetRecordType()`

UnsetRecordType ensures that no value is present for RecordType, not even an explicit nil
### GetDescription

`func (o *BulkApproveEntitlementRecommendationItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BulkApproveEntitlementRecommendationItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BulkApproveEntitlementRecommendationItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BulkApproveEntitlementRecommendationItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *BulkApproveEntitlementRecommendationItem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *BulkApproveEntitlementRecommendationItem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivilegeLevel

`func (o *BulkApproveEntitlementRecommendationItem) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *BulkApproveEntitlementRecommendationItem) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *BulkApproveEntitlementRecommendationItem) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *BulkApproveEntitlementRecommendationItem) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *BulkApproveEntitlementRecommendationItem) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *BulkApproveEntitlementRecommendationItem) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil

