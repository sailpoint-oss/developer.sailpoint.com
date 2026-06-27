---
id: v1-formdefinitionfileuploadresponse
title: Formdefinitionfileuploadresponse
pagination_label: Formdefinitionfileuploadresponse
sidebar_label: Formdefinitionfileuploadresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formdefinitionfileuploadresponse', 'V1Formdefinitionfileuploadresponse'] 
slug: /tools/sdk/go/customforms/models/formdefinitionfileuploadresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitionfileuploadresponse', 'V1Formdefinitionfileuploadresponse']
---

# Formdefinitionfileuploadresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **string** | Created is the date the file was uploaded | [optional] 
**FileId** | Pointer to **string** | fileId is a unique ULID that serves as an identifier for the form definition file | [optional] 
**FormDefinitionId** | Pointer to **string** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Methods

### NewFormdefinitionfileuploadresponse

`func NewFormdefinitionfileuploadresponse() *Formdefinitionfileuploadresponse`

NewFormdefinitionfileuploadresponse instantiates a new Formdefinitionfileuploadresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormdefinitionfileuploadresponseWithDefaults

`func NewFormdefinitionfileuploadresponseWithDefaults() *Formdefinitionfileuploadresponse`

NewFormdefinitionfileuploadresponseWithDefaults instantiates a new Formdefinitionfileuploadresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *Formdefinitionfileuploadresponse) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Formdefinitionfileuploadresponse) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Formdefinitionfileuploadresponse) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Formdefinitionfileuploadresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetFileId

`func (o *Formdefinitionfileuploadresponse) GetFileId() string`

GetFileId returns the FileId field if non-nil, zero value otherwise.

### GetFileIdOk

`func (o *Formdefinitionfileuploadresponse) GetFileIdOk() (*string, bool)`

GetFileIdOk returns a tuple with the FileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileId

`func (o *Formdefinitionfileuploadresponse) SetFileId(v string)`

SetFileId sets FileId field to given value.

### HasFileId

`func (o *Formdefinitionfileuploadresponse) HasFileId() bool`

HasFileId returns a boolean if a field has been set.

### GetFormDefinitionId

`func (o *Formdefinitionfileuploadresponse) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *Formdefinitionfileuploadresponse) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *Formdefinitionfileuploadresponse) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *Formdefinitionfileuploadresponse) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.


