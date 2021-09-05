
export const updateObjectInArray = ( items: any, itemId: any, objPropName: any, newObjProps: {}) => {
   return items.map((i: any) => {
        if (i[objPropName] === itemId) {
            return {
                ...i,
                ...newObjProps
            }
        }
        return i
    })
};

