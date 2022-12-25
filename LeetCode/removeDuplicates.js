// Remove duplicates from sorted array



function removeDuplicates(nums){
    for (let i = 0; i < nums.length; i++) {
			if (nums[i] == nums[i+1]) {
                nums.splice(i,1);
		}
	}
    console.log(nums)
}
removeDuplicates([1,1,2])