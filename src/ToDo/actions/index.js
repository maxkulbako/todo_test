import { createPayloadAction } from '../../core/_helpers';

export const actionAddItem = createPayloadAction('ADD_TODO_ITEM');

export const actionChangeItemStatus = createPayloadAction('CHANGE_ITEM_STATUS');

export const actionSelectActiveItem = createPayloadAction('SELECT_ACTIVE_ITEM');
