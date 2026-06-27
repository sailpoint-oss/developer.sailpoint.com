---
id: v1-export-form-definitions-by-tenant-v1200-response-inner
title: ExportFormDefinitionsByTenantV1200ResponseInner
pagination_label: ExportFormDefinitionsByTenantV1200ResponseInner
sidebar_label: ExportFormDefinitionsByTenantV1200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExportFormDefinitionsByTenantV1200ResponseInner', 'V1ExportFormDefinitionsByTenantV1200ResponseInner'] 
slug: /tools/sdk/go/customforms/models/export-form-definitions-by-tenant-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'ExportFormDefinitionsByTenantV1200ResponseInner', 'V1ExportFormDefinitionsByTenantV1200ResponseInner']
---

# ExportFormDefinitionsByTenantV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | Pointer to [**Formdefinitionresponse**](formdefinitionresponse) |  | [optional] 
**Self** | Pointer to [**ExportFormDefinitionsByTenantV1200ResponseInnerSelf**](export-form-definitions-by-tenant-v1200-response-inner-self) |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewExportFormDefinitionsByTenantV1200ResponseInner

`func NewExportFormDefinitionsByTenantV1200ResponseInner() *ExportFormDefinitionsByTenantV1200ResponseInner`

NewExportFormDefinitionsByTenantV1200ResponseInner instantiates a new ExportFormDefinitionsByTenantV1200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportFormDefinitionsByTenantV1200ResponseInnerWithDefaults

`func NewExportFormDefinitionsByTenantV1200ResponseInnerWithDefaults() *ExportFormDefinitionsByTenantV1200ResponseInner`

NewExportFormDefinitionsByTenantV1200ResponseInnerWithDefaults instantiates a new ExportFormDefinitionsByTenantV1200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObject

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) GetObject() Formdefinitionresponse`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) GetObjectOk() (*Formdefinitionresponse, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) SetObject(v Formdefinitionresponse)`

SetObject sets Object field to given value.

### HasObject

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) HasObject() bool`

HasObject returns a boolean if a field has been set.

### GetSelf

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) GetSelf() ExportFormDefinitionsByTenantV1200ResponseInnerSelf`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) GetSelfOk() (*ExportFormDefinitionsByTenantV1200ResponseInnerSelf, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) SetSelf(v ExportFormDefinitionsByTenantV1200ResponseInnerSelf)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetVersion

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ExportFormDefinitionsByTenantV1200ResponseInner) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


