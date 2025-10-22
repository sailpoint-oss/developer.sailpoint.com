---
id: v2025-parameter-storage-attestation-document
title: ParameterStorageAttestationDocument
pagination_label: ParameterStorageAttestationDocument
sidebar_label: ParameterStorageAttestationDocument
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ParameterStorageAttestationDocument', 'V2025ParameterStorageAttestationDocument'] 
slug: /tools/sdk/go/v2025/models/parameter-storage-attestation-document
tags: ['SDK', 'Software Development Kit', 'ParameterStorageAttestationDocument', 'V2025ParameterStorageAttestationDocument']
---

# ParameterStorageAttestationDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttestationDocument** | Pointer to **string** | The Base64Url encoded attestation document. | [optional] 

## Methods

### NewParameterStorageAttestationDocument

`func NewParameterStorageAttestationDocument() *ParameterStorageAttestationDocument`

NewParameterStorageAttestationDocument instantiates a new ParameterStorageAttestationDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterStorageAttestationDocumentWithDefaults

`func NewParameterStorageAttestationDocumentWithDefaults() *ParameterStorageAttestationDocument`

NewParameterStorageAttestationDocumentWithDefaults instantiates a new ParameterStorageAttestationDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttestationDocument

`func (o *ParameterStorageAttestationDocument) GetAttestationDocument() string`

GetAttestationDocument returns the AttestationDocument field if non-nil, zero value otherwise.

### GetAttestationDocumentOk

`func (o *ParameterStorageAttestationDocument) GetAttestationDocumentOk() (*string, bool)`

GetAttestationDocumentOk returns a tuple with the AttestationDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttestationDocument

`func (o *ParameterStorageAttestationDocument) SetAttestationDocument(v string)`

SetAttestationDocument sets AttestationDocument field to given value.

### HasAttestationDocument

`func (o *ParameterStorageAttestationDocument) HasAttestationDocument() bool`

HasAttestationDocument returns a boolean if a field has been set.


