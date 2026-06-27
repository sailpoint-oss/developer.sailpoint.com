---
id: v1-textquery
title: Textquery
pagination_label: Textquery
sidebar_label: Textquery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Textquery', 'V1Textquery'] 
slug: /tools/sdk/go/accessmodelmetadata/models/textquery
tags: ['SDK', 'Software Development Kit', 'Textquery', 'V1Textquery']
---

# Textquery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | **[]string** | Words or characters that specify a particular thing to be searched for. | 
**Fields** | **[]string** | The fields to be searched. | 
**MatchAny** | Pointer to **bool** | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [optional] [default to false]
**Contains** | Pointer to **bool** | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [optional] [default to false]

## Methods

### NewTextquery

`func NewTextquery(terms []string, fields []string, ) *Textquery`

NewTextquery instantiates a new Textquery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTextqueryWithDefaults

`func NewTextqueryWithDefaults() *Textquery`

NewTextqueryWithDefaults instantiates a new Textquery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerms

`func (o *Textquery) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *Textquery) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *Textquery) SetTerms(v []string)`

SetTerms sets Terms field to given value.


### GetFields

`func (o *Textquery) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *Textquery) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *Textquery) SetFields(v []string)`

SetFields sets Fields field to given value.


### GetMatchAny

`func (o *Textquery) GetMatchAny() bool`

GetMatchAny returns the MatchAny field if non-nil, zero value otherwise.

### GetMatchAnyOk

`func (o *Textquery) GetMatchAnyOk() (*bool, bool)`

GetMatchAnyOk returns a tuple with the MatchAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAny

`func (o *Textquery) SetMatchAny(v bool)`

SetMatchAny sets MatchAny field to given value.

### HasMatchAny

`func (o *Textquery) HasMatchAny() bool`

HasMatchAny returns a boolean if a field has been set.

### GetContains

`func (o *Textquery) GetContains() bool`

GetContains returns the Contains field if non-nil, zero value otherwise.

### GetContainsOk

`func (o *Textquery) GetContainsOk() (*bool, bool)`

GetContainsOk returns a tuple with the Contains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContains

`func (o *Textquery) SetContains(v bool)`

SetContains sets Contains field to given value.

### HasContains

`func (o *Textquery) HasContains() bool`

HasContains returns a boolean if a field has been set.


