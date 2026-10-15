import { Component, type EmptyAttrs, RenderObject, UpdateHandlerLink } from "@velotype/velotype"

type Score = {player: string, points: number}
// The references the render function keeps for handleUpdate: the parts that change
type ScoreRefs = {points: HTMLElement}

class ScoreBoard extends Component<EmptyAttrs> {
    // By default a new value renders new elements. Return an UpdateHandlerLink from the render
    // function, with references to the parts that change, and pass a handleUpdate function that
    // changes those parts in place.
    score = new RenderObject<Score, ScoreRefs>({player: "Ada", points: 0}, (score: Score) => {
        const points = <span>{score.points}</span>
        return new UpdateHandlerLink(<div>{score.player}: {points}</div>, {points})
    }, (_element, refs, _oldScore, newScore) => {
        refs.points.textContent = String(newScore.points)
    })

    override render() {
        return <div>
            {this.score}
            <button type="button" onClick={() => {
                this.score.value = {player: this.score.value.player, points: this.score.value.points + 1}
            }}>Add a point</button>
        </div>
    }
}
void ScoreBoard
