import { expertListModel } from "../../../models/expertListModel";

export interface getUsersAndCountByCompetenceIdUseCase {
  execute(competenceId: string): Promise<expertListModel[]>;
}