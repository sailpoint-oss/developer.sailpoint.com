---
id: v2024-sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigObject', 'V2024SpConfigObject'] 
slug: /tools/sdk/go/v2024/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject', 'V2024SpConfigObject']
---

# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | Pointer to **string** | The object type this configuration is for. | [optional] 
**ReferenceExtractors** | Pointer to **[]string** | List of json paths within an exported object of this type that represent references that need to be resolved. | [optional] 
**SignatureRequired** | Pointer to **bool** | If true, this type of object will be JWS signed and cannot be modified before import. | [optional] [default to false]
**AlwaysResolveById** | Pointer to **bool** | Whether this object type has to be resolved always by ID | [optional] [default to false]
**LegacyObject** | Pointer to **bool** | Whether this is a legacy object | [optional] [default to false]
**OnePerTenant** | Pointer to **bool** | Whether there is only one object of this type | [optional] [default to false]
**Exportable** | Pointer to **bool** | Whether this object can be exported or it is just a reference object | [optional] [default to false]
**Rules** | Pointer to [**SpConfigRules**](sp-config-rules) |  | [optional] 

## Methods

### NewSpConfigObject

`func NewSpConfigObject() *SpConfigObject`

NewSpConfigObject instantiates a new SpConfigObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigObjectWithDefaults

`func NewSpConfigObjectWithDefaults() *SpConfigObject`

NewSpConfigObjectWithDefaults instantiates a new SpConfigObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectType

`func (o *SpConfigObject) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *SpConfigObject) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *SpConfigObject) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *SpConfigObject) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetReferenceExtractors

`func (o *SpConfigObject) GetReferenceExtractors() []string`

GetReferenceExtractors returns the ReferenceExtractors field if non-nil, zero value otherwise.

### GetReferenceExtractorsOk

`func (o *SpConfigObject) GetReferenceExtractorsOk() (*[]string, bool)`

GetReferenceExtractorsOk returns a tuple with the ReferenceExtractors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceExtractors

`func (o *SpConfigObject) SetReferenceExtractors(v []string)`

SetReferenceExtractors sets ReferenceExtractors field to given value.

### HasReferenceExtractors

`func (o *SpConfigObject) HasReferenceExtractors() bool`

HasReferenceExtractors returns a boolean if a field has been set.

### SetReferenceExtractorsNil

`func (o *SpConfigObject) SetReferenceExtractorsNil(b bool)`

 SetReferenceExtractorsNil sets the value for ReferenceExtractors to be an explicit nil

### UnsetReferenceExtractors
`func (o *SpConfigObject) UnsetReferenceExtractors()`

UnsetReferenceExtractors ensures that no value is present for ReferenceExtractors, not even an explicit nil
### GetSignatureRequired

`func (o *SpConfigObject) GetSignatureRequired() bool`

GetSignatureRequired returns the SignatureRequired field if non-nil, zero value otherwise.

### GetSignatureRequiredOk

`func (o *SpConfigObject) GetSignatureRequiredOk() (*bool, bool)`

GetSignatureRequiredOk returns a tuple with the SignatureRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequired

`func (o *SpConfigObject) SetSignatureRequired(v bool)`

SetSignatureRequired sets SignatureRequired field to given value.

### HasSignatureRequired

`func (o *SpConfigObject) HasSignatureRequired() bool`

HasSignatureRequired returns a boolean if a field has been set.

### GetAlwaysResolveById

`func (o *SpConfigObject) GetAlwaysResolveById() bool`

GetAlwaysResolveById returns the AlwaysResolveById field if non-nil, zero value otherwise.

### GetAlwaysResolveByIdOk

`func (o *SpConfigObject) GetAlwaysResolveByIdOk() (*bool, bool)`

GetAlwaysResolveByIdOk returns a tuple with the AlwaysResolveById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlwaysResolveById

`func (o *SpConfigObject) SetAlwaysResolveById(v bool)`

SetAlwaysResolveById sets AlwaysResolveById field to given value.

### HasAlwaysResolveById

`func (o *SpConfigObject) HasAlwaysResolveById() bool`

HasAlwaysResolveById returns a boolean if a field has been set.

### GetLegacyObject

`func (o *SpConfigObject) GetLegacyObject() bool`

GetLegacyObject returns the LegacyObject field if non-nil, zero value otherwise.

### GetLegacyObjectOk

`func (o *SpConfigObject) GetLegacyObjectOk() (*bool, bool)`

GetLegacyObjectOk returns a tuple with the LegacyObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyObject

`func (o *SpConfigObject) SetLegacyObject(v bool)`

SetLegacyObject sets LegacyObject field to given value.

### HasLegacyObject

`func (o *SpConfigObject) HasLegacyObject() bool`

HasLegacyObject returns a boolean if a field has been set.

### GetOnePerTenant

`func (o *SpConfigObject) GetOnePerTenant() bool`

GetOnePerTenant returns the OnePerTenant field if non-nil, zero value otherwise.

### GetOnePerTenantOk

`func (o *SpConfigObject) GetOnePerTenantOk() (*bool, bool)`

GetOnePerTenantOk returns a tuple with the OnePerTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnePerTenant

`func (o *SpConfigObject) SetOnePerTenant(v bool)`

SetOnePerTenant sets OnePerTenant field to given value.

### HasOnePerTenant

`func (o *SpConfigObject) HasOnePerTenant() bool`

HasOnePerTenant returns a boolean if a field has been set.

### GetExportable

`func (o *SpConfigObject) GetExportable() bool`

GetExportable returns the Exportable field if non-nil, zero value otherwise.

### GetExportableOk

`func (o *SpConfigObject) GetExportableOk() (*bool, bool)`

GetExportableOk returns a tuple with the Exportable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportable

`func (o *SpConfigObject) SetExportable(v bool)`

SetExportable sets Exportable field to given value.

### HasExportable

`func (o *SpConfigObject) HasExportable() bool`

HasExportable returns a boolean if a field has been set.

### GetRules

`func (o *SpConfigObject) GetRules() SpConfigRules`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *SpConfigObject) GetRulesOk() (*SpConfigRules, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *SpConfigObject) SetRules(v SpConfigRules)`

SetRules sets Rules field to given value.

### HasRules

`func (o *SpConfigObject) HasRules() bool`

HasRules returns a boolean if a field has been set.


