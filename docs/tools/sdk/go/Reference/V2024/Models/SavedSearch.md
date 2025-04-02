---
id: v2024-saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearch', 'V2024SavedSearch'] 
slug: /tools/sdk/go/v2024/models/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'V2024SavedSearch']
---

# SavedSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the saved search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the saved search.  | [optional] 
**Created** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Modified** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | 
**Columns** | Pointer to [**map[string][]Column**](array) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** | **string** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | 
**Fields** | Pointer to **[]string** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** | Pointer to **map[string][]string** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results.  | [optional] 
**Filters** | Pointer to [**NullableSavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 
**Id** | Pointer to **string** | The saved search ID.  | [optional] 
**Owner** | Pointer to [**TypedReference**](typed-reference) |  | [optional] 
**OwnerId** | Pointer to **string** | The ID of the identity that owns this saved search. | [optional] 
**Public** | Pointer to **bool** | Whether this saved search is visible to anyone but the owner. This field will always be false as there is no way to set a saved search as public at this time. | [optional] [default to false]

## Methods

### NewSavedSearch

`func NewSavedSearch(indices []Index, query string, ) *SavedSearch`

NewSavedSearch instantiates a new SavedSearch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchWithDefaults

`func NewSavedSearchWithDefaults() *SavedSearch`

NewSavedSearchWithDefaults instantiates a new SavedSearch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SavedSearch) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SavedSearch) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SavedSearch) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SavedSearch) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *SavedSearch) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SavedSearch) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SavedSearch) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SavedSearch) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *SavedSearch) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SavedSearch) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *SavedSearch) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SavedSearch) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SavedSearch) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SavedSearch) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SavedSearch) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SavedSearch) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SavedSearch) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SavedSearch) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SavedSearch) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SavedSearch) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SavedSearch) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SavedSearch) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetIndices

`func (o *SavedSearch) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *SavedSearch) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *SavedSearch) SetIndices(v []Index)`

SetIndices sets Indices field to given value.


### GetColumns

`func (o *SavedSearch) GetColumns() map[string][]Column`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *SavedSearch) GetColumnsOk() (*map[string][]Column, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *SavedSearch) SetColumns(v map[string][]Column)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *SavedSearch) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetQuery

`func (o *SavedSearch) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SavedSearch) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SavedSearch) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetFields

`func (o *SavedSearch) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *SavedSearch) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *SavedSearch) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *SavedSearch) HasFields() bool`

HasFields returns a boolean if a field has been set.

### SetFieldsNil

`func (o *SavedSearch) SetFieldsNil(b bool)`

 SetFieldsNil sets the value for Fields to be an explicit nil

### UnsetFields
`func (o *SavedSearch) UnsetFields()`

UnsetFields ensures that no value is present for Fields, not even an explicit nil
### GetOrderBy

`func (o *SavedSearch) GetOrderBy() map[string][]string`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *SavedSearch) GetOrderByOk() (*map[string][]string, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *SavedSearch) SetOrderBy(v map[string][]string)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *SavedSearch) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### SetOrderByNil

`func (o *SavedSearch) SetOrderByNil(b bool)`

 SetOrderByNil sets the value for OrderBy to be an explicit nil

### UnsetOrderBy
`func (o *SavedSearch) UnsetOrderBy()`

UnsetOrderBy ensures that no value is present for OrderBy, not even an explicit nil
### GetSort

`func (o *SavedSearch) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *SavedSearch) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *SavedSearch) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *SavedSearch) HasSort() bool`

HasSort returns a boolean if a field has been set.

### SetSortNil

`func (o *SavedSearch) SetSortNil(b bool)`

 SetSortNil sets the value for Sort to be an explicit nil

### UnsetSort
`func (o *SavedSearch) UnsetSort()`

UnsetSort ensures that no value is present for Sort, not even an explicit nil
### GetFilters

`func (o *SavedSearch) GetFilters() SavedSearchDetailFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SavedSearch) GetFiltersOk() (*SavedSearchDetailFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SavedSearch) SetFilters(v SavedSearchDetailFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SavedSearch) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *SavedSearch) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *SavedSearch) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil
### GetId

`func (o *SavedSearch) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SavedSearch) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SavedSearch) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SavedSearch) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOwner

`func (o *SavedSearch) GetOwner() TypedReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SavedSearch) GetOwnerOk() (*TypedReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SavedSearch) SetOwner(v TypedReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SavedSearch) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetOwnerId

`func (o *SavedSearch) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *SavedSearch) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *SavedSearch) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *SavedSearch) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetPublic

`func (o *SavedSearch) GetPublic() bool`

GetPublic returns the Public field if non-nil, zero value otherwise.

### GetPublicOk

`func (o *SavedSearch) GetPublicOk() (*bool, bool)`

GetPublicOk returns a tuple with the Public field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublic

`func (o *SavedSearch) SetPublic(v bool)`

SetPublic sets Public field to given value.

### HasPublic

`func (o *SavedSearch) HasPublic() bool`

HasPublic returns a boolean if a field has been set.


