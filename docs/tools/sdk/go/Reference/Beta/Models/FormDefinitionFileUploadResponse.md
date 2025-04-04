---
id: beta-form-definition-file-upload-response
title: FormDefinitionFileUploadResponse
pagination_label: FormDefinitionFileUploadResponse
sidebar_label: FormDefinitionFileUploadResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDefinitionFileUploadResponse', 'BetaFormDefinitionFileUploadResponse'] 
slug: /tools/sdk/go/beta/models/form-definition-file-upload-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionFileUploadResponse', 'BetaFormDefinitionFileUploadResponse']
---

# FormDefinitionFileUploadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **string** | Created is the date the file was uploaded | [optional] 
**FileId** | Pointer to **string** | fileId is a unique ULID that serves as an identifier for the form definition file | [optional] 
**FormDefinitionId** | Pointer to **string** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Methods

### NewFormDefinitionFileUploadResponse

`func NewFormDefinitionFileUploadResponse() *FormDefinitionFileUploadResponse`

NewFormDefinitionFileUploadResponse instantiates a new FormDefinitionFileUploadResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDefinitionFileUploadResponseWithDefaults

`func NewFormDefinitionFileUploadResponseWithDefaults() *FormDefinitionFileUploadResponse`

NewFormDefinitionFileUploadResponseWithDefaults instantiates a new FormDefinitionFileUploadResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *FormDefinitionFileUploadResponse) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *FormDefinitionFileUploadResponse) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *FormDefinitionFileUploadResponse) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *FormDefinitionFileUploadResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetFileId

`func (o *FormDefinitionFileUploadResponse) GetFileId() string`

GetFileId returns the FileId field if non-nil, zero value otherwise.

### GetFileIdOk

`func (o *FormDefinitionFileUploadResponse) GetFileIdOk() (*string, bool)`

GetFileIdOk returns a tuple with the FileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileId

`func (o *FormDefinitionFileUploadResponse) SetFileId(v string)`

SetFileId sets FileId field to given value.

### HasFileId

`func (o *FormDefinitionFileUploadResponse) HasFileId() bool`

HasFileId returns a boolean if a field has been set.

### GetFormDefinitionId

`func (o *FormDefinitionFileUploadResponse) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *FormDefinitionFileUploadResponse) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *FormDefinitionFileUploadResponse) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *FormDefinitionFileUploadResponse) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.


