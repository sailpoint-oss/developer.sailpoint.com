---
id: v1-listformdefinitionsbytenantresponse
title: Listformdefinitionsbytenantresponse
pagination_label: Listformdefinitionsbytenantresponse
sidebar_label: Listformdefinitionsbytenantresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Listformdefinitionsbytenantresponse', 'V1Listformdefinitionsbytenantresponse'] 
slug: /tools/sdk/go/customforms/models/listformdefinitionsbytenantresponse
tags: ['SDK', 'Software Development Kit', 'Listformdefinitionsbytenantresponse', 'V1Listformdefinitionsbytenantresponse']
---

# Listformdefinitionsbytenantresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** | Count number of results. | [optional] 
**Results** | Pointer to [**[]Formdefinitionresponse**](formdefinitionresponse) | List of FormDefinitionResponse items. | [optional] 

## Methods

### NewListformdefinitionsbytenantresponse

`func NewListformdefinitionsbytenantresponse() *Listformdefinitionsbytenantresponse`

NewListformdefinitionsbytenantresponse instantiates a new Listformdefinitionsbytenantresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListformdefinitionsbytenantresponseWithDefaults

`func NewListformdefinitionsbytenantresponseWithDefaults() *Listformdefinitionsbytenantresponse`

NewListformdefinitionsbytenantresponseWithDefaults instantiates a new Listformdefinitionsbytenantresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *Listformdefinitionsbytenantresponse) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *Listformdefinitionsbytenantresponse) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *Listformdefinitionsbytenantresponse) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *Listformdefinitionsbytenantresponse) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *Listformdefinitionsbytenantresponse) GetResults() []Formdefinitionresponse`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *Listformdefinitionsbytenantresponse) GetResultsOk() (*[]Formdefinitionresponse, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *Listformdefinitionsbytenantresponse) SetResults(v []Formdefinitionresponse)`

SetResults sets Results field to given value.

### HasResults

`func (o *Listformdefinitionsbytenantresponse) HasResults() bool`

HasResults returns a boolean if a field has been set.


