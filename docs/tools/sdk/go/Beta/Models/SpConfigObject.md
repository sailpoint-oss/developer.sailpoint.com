---
id: sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SpConfigObject'] 
slug: /tools/sdk/go/beta/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject']
---

# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** |  Pointer to **string** | The object type this configuration is for. | [optional] 
**ResolveByIdUrl** |  Pointer to [**SpConfigUrl**](sp-config-url) |  | [optional] 
**ResolveByNameUrl** |  Pointer to [**[]SpConfigUrl**](sp-config-url) | Url and query parameters to be used to resolve this type of object by name. | [optional] 
**ExportUrl** |  Pointer to [**SpConfigUrl**](sp-config-url) |  | [optional] 
**ExportRight** |  Pointer to **string** | Rights needed by the invoker of sp-config/export in order to export this type of object. | [optional] 
**ExportLimit** |  Pointer to **int32** | Pagination limit imposed by the target service for this object type. | [optional] 
**ImportUrl** |  Pointer to [**SpConfigUrl**](sp-config-url) |  | [optional] 
**ImportRight** |  Pointer to **string** | Rights needed by the invoker of sp-config/import in order to import this type of object. | [optional] 
**ImportLimit** |  Pointer to **int32** | Pagination limit imposed by the target service for this object type. | [optional] 
**ReferenceExtractors** |  Pointer to **[]string** | List of json paths within an exported object of this type that represent references that need to be resolved. | [optional] 
**SignatureRequired** |  Pointer to **bool** | If true, this type of object will be JWS signed and cannot be modified before import. | [optional] [default to false]

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

### GetResolveByIdUrl

`func (o *SpConfigObject) GetResolveByIdUrl() SpConfigUrl`

GetResolveByIdUrl returns the ResolveByIdUrl field if non-nil, zero value otherwise.

### GetResolveByIdUrlOk

`func (o *SpConfigObject) GetResolveByIdUrlOk() (*SpConfigUrl, bool)`

GetResolveByIdUrlOk returns a tuple with the ResolveByIdUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveByIdUrl

`func (o *SpConfigObject) SetResolveByIdUrl(v SpConfigUrl)`

SetResolveByIdUrl sets ResolveByIdUrl field to given value.

### HasResolveByIdUrl

`func (o *SpConfigObject) HasResolveByIdUrl() bool`

HasResolveByIdUrl returns a boolean if a field has been set.

### GetResolveByNameUrl

`func (o *SpConfigObject) GetResolveByNameUrl() []SpConfigUrl`

GetResolveByNameUrl returns the ResolveByNameUrl field if non-nil, zero value otherwise.

### GetResolveByNameUrlOk

`func (o *SpConfigObject) GetResolveByNameUrlOk() (*[]SpConfigUrl, bool)`

GetResolveByNameUrlOk returns a tuple with the ResolveByNameUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveByNameUrl

`func (o *SpConfigObject) SetResolveByNameUrl(v []SpConfigUrl)`

SetResolveByNameUrl sets ResolveByNameUrl field to given value.

### HasResolveByNameUrl

`func (o *SpConfigObject) HasResolveByNameUrl() bool`

HasResolveByNameUrl returns a boolean if a field has been set.

### GetExportUrl

`func (o *SpConfigObject) GetExportUrl() SpConfigUrl`

GetExportUrl returns the ExportUrl field if non-nil, zero value otherwise.

### GetExportUrlOk

`func (o *SpConfigObject) GetExportUrlOk() (*SpConfigUrl, bool)`

GetExportUrlOk returns a tuple with the ExportUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportUrl

`func (o *SpConfigObject) SetExportUrl(v SpConfigUrl)`

SetExportUrl sets ExportUrl field to given value.

### HasExportUrl

`func (o *SpConfigObject) HasExportUrl() bool`

HasExportUrl returns a boolean if a field has been set.

### GetExportRight

`func (o *SpConfigObject) GetExportRight() string`

GetExportRight returns the ExportRight field if non-nil, zero value otherwise.

### GetExportRightOk

`func (o *SpConfigObject) GetExportRightOk() (*string, bool)`

GetExportRightOk returns a tuple with the ExportRight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportRight

`func (o *SpConfigObject) SetExportRight(v string)`

SetExportRight sets ExportRight field to given value.

### HasExportRight

`func (o *SpConfigObject) HasExportRight() bool`

HasExportRight returns a boolean if a field has been set.

### GetExportLimit

`func (o *SpConfigObject) GetExportLimit() int32`

GetExportLimit returns the ExportLimit field if non-nil, zero value otherwise.

### GetExportLimitOk

`func (o *SpConfigObject) GetExportLimitOk() (*int32, bool)`

GetExportLimitOk returns a tuple with the ExportLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportLimit

`func (o *SpConfigObject) SetExportLimit(v int32)`

SetExportLimit sets ExportLimit field to given value.

### HasExportLimit

`func (o *SpConfigObject) HasExportLimit() bool`

HasExportLimit returns a boolean if a field has been set.

### GetImportUrl

`func (o *SpConfigObject) GetImportUrl() SpConfigUrl`

GetImportUrl returns the ImportUrl field if non-nil, zero value otherwise.

### GetImportUrlOk

`func (o *SpConfigObject) GetImportUrlOk() (*SpConfigUrl, bool)`

GetImportUrlOk returns a tuple with the ImportUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportUrl

`func (o *SpConfigObject) SetImportUrl(v SpConfigUrl)`

SetImportUrl sets ImportUrl field to given value.

### HasImportUrl

`func (o *SpConfigObject) HasImportUrl() bool`

HasImportUrl returns a boolean if a field has been set.

### GetImportRight

`func (o *SpConfigObject) GetImportRight() string`

GetImportRight returns the ImportRight field if non-nil, zero value otherwise.

### GetImportRightOk

`func (o *SpConfigObject) GetImportRightOk() (*string, bool)`

GetImportRightOk returns a tuple with the ImportRight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportRight

`func (o *SpConfigObject) SetImportRight(v string)`

SetImportRight sets ImportRight field to given value.

### HasImportRight

`func (o *SpConfigObject) HasImportRight() bool`

HasImportRight returns a boolean if a field has been set.

### GetImportLimit

`func (o *SpConfigObject) GetImportLimit() int32`

GetImportLimit returns the ImportLimit field if non-nil, zero value otherwise.

### GetImportLimitOk

`func (o *SpConfigObject) GetImportLimitOk() (*int32, bool)`

GetImportLimitOk returns a tuple with the ImportLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportLimit

`func (o *SpConfigObject) SetImportLimit(v int32)`

SetImportLimit sets ImportLimit field to given value.

### HasImportLimit

`func (o *SpConfigObject) HasImportLimit() bool`

HasImportLimit returns a boolean if a field has been set.

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


[[Back to top]](#) 


