---
id: v1-savedsearch
title: Savedsearch
pagination_label: Savedsearch
sidebar_label: Savedsearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Savedsearch', 'V1Savedsearch'] 
slug: /tools/sdk/go/savedsearch/models/savedsearch
tags: ['SDK', 'Software Development Kit', 'Savedsearch', 'V1Savedsearch']
---

# Savedsearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the saved search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the saved search.  | [optional] 
**Created** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Modified** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Indices** | **[]Index** | The names of the Elasticsearch indices in which to search.  | 
**Columns** | Pointer to [**map[string][]Column**](https://go.dev/tour/moretypes/6) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** | **string** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | 
**Fields** | Pointer to **[]string** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** | Pointer to **map[string][]string** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results.  | [optional] 
**Filters** | Pointer to [**NullableSavedsearchdetailFilters**](savedsearchdetail-filters) |  | [optional] 
**Id** | Pointer to **string** | The saved search ID.  | [optional] 
**Owner** | Pointer to [**Typedreference**](typedreference) |  | [optional] 
**OwnerId** | Pointer to **string** | The ID of the identity that owns this saved search. | [optional] 
**Public** | Pointer to **bool** | Whether this saved search is visible to anyone but the owner. This field will always be false as there is no way to set a saved search as public at this time. | [optional] [default to false]

## Methods

### NewSavedsearch

`func NewSavedsearch(indices []Index, query string, ) *Savedsearch`

NewSavedsearch instantiates a new Savedsearch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchWithDefaults

`func NewSavedsearchWithDefaults() *Savedsearch`

NewSavedsearchWithDefaults instantiates a new Savedsearch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Savedsearch) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Savedsearch) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Savedsearch) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Savedsearch) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Savedsearch) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Savedsearch) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Savedsearch) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Savedsearch) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Savedsearch) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Savedsearch) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *Savedsearch) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Savedsearch) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Savedsearch) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Savedsearch) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Savedsearch) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Savedsearch) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *Savedsearch) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Savedsearch) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Savedsearch) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Savedsearch) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Savedsearch) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Savedsearch) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetIndices

`func (o *Savedsearch) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *Savedsearch) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *Savedsearch) SetIndices(v []Index)`

SetIndices sets Indices field to given value.


### GetColumns

`func (o *Savedsearch) GetColumns() map[string][]Column`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *Savedsearch) GetColumnsOk() (*map[string][]Column, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *Savedsearch) SetColumns(v map[string][]Column)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *Savedsearch) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetQuery

`func (o *Savedsearch) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Savedsearch) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Savedsearch) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetFields

`func (o *Savedsearch) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *Savedsearch) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *Savedsearch) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *Savedsearch) HasFields() bool`

HasFields returns a boolean if a field has been set.

### SetFieldsNil

`func (o *Savedsearch) SetFieldsNil(b bool)`

 SetFieldsNil sets the value for Fields to be an explicit nil

### UnsetFields
`func (o *Savedsearch) UnsetFields()`

UnsetFields ensures that no value is present for Fields, not even an explicit nil
### GetOrderBy

`func (o *Savedsearch) GetOrderBy() map[string][]string`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *Savedsearch) GetOrderByOk() (*map[string][]string, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *Savedsearch) SetOrderBy(v map[string][]string)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *Savedsearch) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### SetOrderByNil

`func (o *Savedsearch) SetOrderByNil(b bool)`

 SetOrderByNil sets the value for OrderBy to be an explicit nil

### UnsetOrderBy
`func (o *Savedsearch) UnsetOrderBy()`

UnsetOrderBy ensures that no value is present for OrderBy, not even an explicit nil
### GetSort

`func (o *Savedsearch) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *Savedsearch) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *Savedsearch) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *Savedsearch) HasSort() bool`

HasSort returns a boolean if a field has been set.

### SetSortNil

`func (o *Savedsearch) SetSortNil(b bool)`

 SetSortNil sets the value for Sort to be an explicit nil

### UnsetSort
`func (o *Savedsearch) UnsetSort()`

UnsetSort ensures that no value is present for Sort, not even an explicit nil
### GetFilters

`func (o *Savedsearch) GetFilters() SavedsearchdetailFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Savedsearch) GetFiltersOk() (*SavedsearchdetailFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Savedsearch) SetFilters(v SavedsearchdetailFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *Savedsearch) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *Savedsearch) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *Savedsearch) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil
### GetId

`func (o *Savedsearch) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Savedsearch) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Savedsearch) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Savedsearch) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOwner

`func (o *Savedsearch) GetOwner() Typedreference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Savedsearch) GetOwnerOk() (*Typedreference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Savedsearch) SetOwner(v Typedreference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Savedsearch) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetOwnerId

`func (o *Savedsearch) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Savedsearch) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Savedsearch) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Savedsearch) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetPublic

`func (o *Savedsearch) GetPublic() bool`

GetPublic returns the Public field if non-nil, zero value otherwise.

### GetPublicOk

`func (o *Savedsearch) GetPublicOk() (*bool, bool)`

GetPublicOk returns a tuple with the Public field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublic

`func (o *Savedsearch) SetPublic(v bool)`

SetPublic sets Public field to given value.

### HasPublic

`func (o *Savedsearch) HasPublic() bool`

HasPublic returns a boolean if a field has been set.


