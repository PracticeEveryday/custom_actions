const core = require('@actions/core')
const github = require('@actions/github')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
    try {
        // `누구에게 인사할지` 입력은 액션 메타데이터 파일에 정의되어 있습니다.
        const whoToGreet = core.getInput('who-to-greet', { required: true })
        core.info(`Hello, ${whoToGreet}!`)

        // 현재 시간을 가져와 출력으로 설정합니다.
        const time = new Date().toTimeString()
        core.setOutput('time', time)

        // 디버깅을 위한 페이로드 출력
        core.info(
            `The event payload: ${JSON.stringify(github.context.payload, null, 2)}`
        )
    } catch (error) {
        // 오류가 발생하면 워크플로우 단계 실패
        core.setFailed(error.message)
    }
}

module.exports = {
    run
}