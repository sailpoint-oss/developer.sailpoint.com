---
id: v1-spconfigobject
title: Spconfigobject
pagination_label: Spconfigobject
sidebar_label: Spconfigobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigobject', 'V1Spconfigobject'] 
slug: /tools/sdk/go/spconfig/models/spconfigobject
tags: ['SDK', 'Software Development Kit', 'Spconfigobject', 'V1Spconfigobject']
---

# Spconfigobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | Pointer to **string** | Object type the configuration is for. | [optional] 
**ReferenceExtractors** | Pointer to **[]string** | List of JSON paths within an exported object of this type, representing references that must be resolved. | [optional] 
**SignatureRequired** | Pointer to **bool** | Indicates whether this type of object will be JWS signed and cannot be modified before import. | [optional] [default to false]
**AlwaysResolveById** | Pointer to **bool** | Indicates whether this object type must be always be resolved by ID. | [optional] [default to false]
**LegacyObject** | Pointer to **bool** | Indicates whether this is a legacy object. | [optional] [default to false]
**OnePerTenant** | Pointer to **bool** | Indicates whether there is only one object of this type. | [optional] [default to false]
**Exportable** | Pointer to **bool** | Indicates whether the object can be exported or is just a reference object. | [optional] [default to false]
**Rules** | Pointer to [**Spconfigrules**](spconfigrules) |  | [optional] 

## Methods

### NewSpconfigobject

`func NewSpconfigobject() *Spconfigobject`

NewSpconfigobject instantiates a new Spconfigobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigobjectWithDefaults

`func NewSpconfigobjectWithDefaults() *Spconfigobject`

NewSpconfigobjectWithDefaults instantiates a new Spconfigobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectType

`func (o *Spconfigobject) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *Spconfigobject) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *Spconfigobject) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *Spconfigobject) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetReferenceExtractors

`func (o *Spconfigobject) GetReferenceExtractors() []string`

GetReferenceExtractors returns the ReferenceExtractors field if non-nil, zero value otherwise.

### GetReferenceExtractorsOk

`func (o *Spconfigobject) GetReferenceExtractorsOk() (*[]string, bool)`

GetReferenceExtractorsOk returns a tuple with the ReferenceExtractors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceExtractors

`func (o *Spconfigobject) SetReferenceExtractors(v []string)`

SetReferenceExtractors sets ReferenceExtractors field to given value.

### HasReferenceExtractors

`func (o *Spconfigobject) HasReferenceExtractors() bool`

HasReferenceExtractors returns a boolean if a field has been set.

### SetReferenceExtractorsNil

`func (o *Spconfigobject) SetReferenceExtractorsNil(b bool)`

 SetReferenceExtractorsNil sets the value for ReferenceExtractors to be an explicit nil

### UnsetReferenceExtractors
`func (o *Spconfigobject) UnsetReferenceExtractors()`

UnsetReferenceExtractors ensures that no value is present for ReferenceExtractors, not even an explicit nil
### GetSignatureRequired

`func (o *Spconfigobject) GetSignatureRequired() bool`

GetSignatureRequired returns the SignatureRequired field if non-nil, zero value otherwise.

### GetSignatureRequiredOk

`func (o *Spconfigobject) GetSignatureRequiredOk() (*bool, bool)`

GetSignatureRequiredOk returns a tuple with the SignatureRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequired

`func (o *Spconfigobject) SetSignatureRequired(v bool)`

SetSignatureRequired sets SignatureRequired field to given value.

### HasSignatureRequired

`func (o *Spconfigobject) HasSignatureRequired() bool`

HasSignatureRequired returns a boolean if a field has been set.

### GetAlwaysResolveById

`func (o *Spconfigobject) GetAlwaysResolveById() bool`

GetAlwaysResolveById returns the AlwaysResolveById field if non-nil, zero value otherwise.

### GetAlwaysResolveByIdOk

`func (o *Spconfigobject) GetAlwaysResolveByIdOk() (*bool, bool)`

GetAlwaysResolveByIdOk returns a tuple with the AlwaysResolveById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlwaysResolveById

`func (o *Spconfigobject) SetAlwaysResolveById(v bool)`

SetAlwaysResolveById sets AlwaysResolveById field to given value.

### HasAlwaysResolveById

`func (o *Spconfigobject) HasAlwaysResolveById() bool`

HasAlwaysResolveById returns a boolean if a field has been set.

### GetLegacyObject

`func (o *Spconfigobject) GetLegacyObject() bool`

GetLegacyObject returns the LegacyObject field if non-nil, zero value otherwise.

### GetLegacyObjectOk

`func (o *Spconfigobject) GetLegacyObjectOk() (*bool, bool)`

GetLegacyObjectOk returns a tuple with the LegacyObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyObject

`func (o *Spconfigobject) SetLegacyObject(v bool)`

SetLegacyObject sets LegacyObject field to given value.

### HasLegacyObject

`func (o *Spconfigobject) HasLegacyObject() bool`

HasLegacyObject returns a boolean if a field has been set.

### GetOnePerTenant

`func (o *Spconfigobject) GetOnePerTenant() bool`

GetOnePerTenant returns the OnePerTenant field if non-nil, zero value otherwise.

### GetOnePerTenantOk

`func (o *Spconfigobject) GetOnePerTenantOk() (*bool, bool)`

GetOnePerTenantOk returns a tuple with the OnePerTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnePerTenant

`func (o *Spconfigobject) SetOnePerTenant(v bool)`

SetOnePerTenant sets OnePerTenant field to given value.

### HasOnePerTenant

`func (o *Spconfigobject) HasOnePerTenant() bool`

HasOnePerTenant returns a boolean if a field has been set.

### GetExportable

`func (o *Spconfigobject) GetExportable() bool`

GetExportable returns the Exportable field if non-nil, zero value otherwise.

### GetExportableOk

`func (o *Spconfigobject) GetExportableOk() (*bool, bool)`

GetExportableOk returns a tuple with the Exportable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportable

`func (o *Spconfigobject) SetExportable(v bool)`

SetExportable sets Exportable field to given value.

### HasExportable

`func (o *Spconfigobject) HasExportable() bool`

HasExportable returns a boolean if a field has been set.

### GetRules

`func (o *Spconfigobject) GetRules() Spconfigrules`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *Spconfigobject) GetRulesOk() (*Spconfigrules, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *Spconfigobject) SetRules(v Spconfigrules)`

SetRules sets Rules field to given value.

### HasRules

`func (o *Spconfigobject) HasRules() bool`

HasRules returns a boolean if a field has been set.


