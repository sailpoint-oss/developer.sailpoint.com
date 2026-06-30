---
id: v1-manualdiscoverapplications
title: Manualdiscoverapplications
pagination_label: Manualdiscoverapplications
sidebar_label: Manualdiscoverapplications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Manualdiscoverapplications', 'V1Manualdiscoverapplications'] 
slug: /tools/sdk/go/applicationdiscovery/models/manualdiscoverapplications
tags: ['SDK', 'Software Development Kit', 'Manualdiscoverapplications', 'V1Manualdiscoverapplications']
---

# Manualdiscoverapplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | 

## Methods

### NewManualdiscoverapplications

`func NewManualdiscoverapplications(file *os.File, ) *Manualdiscoverapplications`

NewManualdiscoverapplications instantiates a new Manualdiscoverapplications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManualdiscoverapplicationsWithDefaults

`func NewManualdiscoverapplicationsWithDefaults() *Manualdiscoverapplications`

NewManualdiscoverapplicationsWithDefaults instantiates a new Manualdiscoverapplications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *Manualdiscoverapplications) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *Manualdiscoverapplications) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *Manualdiscoverapplications) SetFile(v *os.File)`

SetFile sets File field to given value.



