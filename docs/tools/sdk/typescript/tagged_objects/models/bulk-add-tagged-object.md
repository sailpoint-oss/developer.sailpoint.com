# BulkAddTaggedObject

# BulkAddTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectRefs** | **(optional)** `Array<TaggedObjectDto>` |  | [default to undefined]
**tags** | **(optional)** `Array<string>` | Label to be applied to an Object | [default to undefined]
**operation** | **(optional)** `string` | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [default to OperationEnum_Append]

