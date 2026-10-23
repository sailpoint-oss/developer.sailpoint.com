# Orphanidentitiesreportarguments

# Orphanidentitiesreportarguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | Pointer to **[]string** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Methods

### NewOrphanidentitiesreportarguments

`func NewOrphanidentitiesreportarguments() *Orphanidentitiesreportarguments`

NewOrphanidentitiesreportarguments instantiates a new Orphanidentitiesreportarguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrphanidentitiesreportargumentsWithDefaults

`func NewOrphanidentitiesreportargumentsWithDefaults() *Orphanidentitiesreportarguments`

NewOrphanidentitiesreportargumentsWithDefaults instantiates a new Orphanidentitiesreportarguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectedFormats

`func (o *Orphanidentitiesreportarguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *Orphanidentitiesreportarguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *Orphanidentitiesreportarguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *Orphanidentitiesreportarguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.


