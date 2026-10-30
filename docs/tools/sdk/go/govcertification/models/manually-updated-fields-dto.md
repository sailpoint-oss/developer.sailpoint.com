# ManuallyUpdatedFieldsDTO

# ManuallyUpdatedFieldsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | Pointer to **bool** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/docs/api/get-entitlement-v-1) > `name` property. | [optional] [default to false]
**Description** | Pointer to **bool** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/docs/api/get-entitlement-v-1) > `description` property. | [optional] [default to false]

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

### GetDisplayName

`func (o *ManuallyUpdatedFieldsDTO) GetDisplayName() bool`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ManuallyUpdatedFieldsDTO) GetDisplayNameOk() (*bool, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ManuallyUpdatedFieldsDTO) SetDisplayName(v bool)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ManuallyUpdatedFieldsDTO) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *ManuallyUpdatedFieldsDTO) GetDescription() bool`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ManuallyUpdatedFieldsDTO) GetDescriptionOk() (*bool, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ManuallyUpdatedFieldsDTO) SetDescription(v bool)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ManuallyUpdatedFieldsDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


